import React, { MouseEventHandler } from "react";
import { Button, TextField } from "@mui/material";

interface InputFormProps {
  urls: string[];
  handleChange: (index: number, value: string) => void;
  processUrls: MouseEventHandler<HTMLButtonElement>;
}

const InputForm = ({ urls, handleChange, processUrls }: InputFormProps) => {
  return (
    <div className="p-5 space-y-2">
      <h2 className="text-gray-500 font-bold">News Article URLs</h2>
      <div className="mt-5 flex w-full justify-around">
        {urls.map((url, index) => (
          <TextField
            key={index}
            type="text"
            value={url}
            className="w-72"
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`URL ${index + 1}`}
          />
        ))}
        <Button
          onClick={processUrls}
          type="button"
          variant="contained"
          color="secondary"
        >
          Process URLs
        </Button>
      </div>
    </div>
  );
};

export default InputForm;
