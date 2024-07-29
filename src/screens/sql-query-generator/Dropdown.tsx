import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface DropdownProps {
  tables: string[];
  onSelect: (table: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ tables, onSelect }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="table-select-label">Select a table</InputLabel>
      <Select
        labelId="table-select-label"
        onChange={(e) => onSelect(e.target.value as string)}
        className="w-52"
        label="Select a table"
      >
        {tables.map((table, index) => (
          <MenuItem key={index} value={table}>
            {table}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
