import * as React from "react";
import { Button, Form, Input, Popconfirm, Space } from "antd";
import axios from "axios";
import {
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FileDto } from "@/services/Interface";
import { errorDialog } from "@/components/dialogs";
import { getAppData } from "@/store/appData";
import { API_URL } from "@/services/apiWrapper";

interface Props {
  file?: FileDto;
  onChangeFile?: (file?: FileDto) => void;
  disabled?: boolean;
  size?: SizeType;
  inDataGrid?: boolean;
  fn?: dataGridUploadFn;
  metaData?: Record<string, any>;
  target?: string;
  hiddenLabel?: boolean;
  accept?: string;
}

export interface dataGridUploadFn {
  upload?: boolean;
  preview?: boolean;
  download?: boolean;
  delete?: boolean;
}
const defaultFn: dataGridUploadFn = {
  upload: true,
  preview: true,
  download: true,
  delete: true,
};

function FileUploader({
  file,
  onChangeFile,
  disabled,
  size = "middle",
  inDataGrid = false,
  fn,
  metaData,
  target,
  hiddenLabel = false,
  accept = "*/*",
}: Props) {
  fn = { ...defaultFn, ...fn };
  const [spinning, setSpinning] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [uploadedFile, setUploadedFile] = React.useState<FileDto>();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const abortController = React.useRef(new AbortController()).current;

  const handleButtonClick = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onChange = React.useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        setSpinning(true);
        const formData = new FormData();
        formData.append("cropYn", "Y");
        formData.append("width", "300");
        formData.append("height", "300");

        Object.entries(metaData ?? {}).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const file = event.target.files?.item(0);
        if (file) formData.append("file", file);
        const url = `${API_URL}/v1/upload`;

        const { data } = await axios.post(url, formData, {
          signal: abortController.signal,
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: getAppData()?.authorization ?? "",
          },
          onUploadProgress: (progressEvent) => {
            if (file) {
              setProgress(Math.round((progressEvent.loaded / file.size) * 100));
            }
          },
        });

        if (data.error) {
          await errorDialog({ content: data.error.data });
        } else {
          setUploadedFile({ ...data.rs.fileInfo, __status__: "C" });
          onChangeFile?.({ ...data.rs.fileInfo, __status__: "C" });
        }
      } catch (err: any) {
        await errorDialog(err);
      } finally {
        setSpinning(false);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [abortController.signal, metaData, onChangeFile],
  );

  const handleDel = React.useCallback(() => {
    setUploadedFile(undefined);

    onChangeFile?.(undefined);
  }, [onChangeFile]);

  React.useEffect(() => {
    if (file !== uploadedFile) {
      if (file) {
        setUploadedFile({ ...file, __status__: "C" });
      } else {
        setUploadedFile(undefined);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      <input
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={onChange}
        style={{ display: "none" }}
      />

      <Space size={10}>
        <Input
          value={spinning ? `Uploading ${progress}%` : uploadedFile?.fileNm}
          readOnly
          onClick={handleButtonClick}
          disabled={disabled || !fn?.upload}
          size={size}
          style={inDataGrid ? { width: 100 } : {}}
        />
        {fn?.upload && (
          <Button
            onClick={handleButtonClick}
            loading={spinning}
            disabled={disabled}
            size={size}
          >
            파일선택
          </Button>
        )}

        {uploadedFile && (
          <Button
            size={"small"}
            type={"text"}
            icon={<DeleteOutlined />}
            block
            onClick={handleDel}
          >
            {hiddenLabel ? null : "삭제"}
          </Button>
        )}
      </Space>
    </>
  );
}

export { FileUploader };
