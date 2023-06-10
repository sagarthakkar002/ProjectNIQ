import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IKeys {
  id: string;
  name: string;
}

interface selectProps {
  handleChange: (params: any) => any;
  labelName: string;
  value: string;
  options: Array<IKeys>,
  isDisabled: boolean
}

export default function CustomSelect({
  handleChange,
  labelName,
  value,
  options,
  isDisabled
}: selectProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="category">{labelName}</InputLabel>
        <Select
          labelId="category"
          id="select-"
          value={value || ''}
          label="Category"
          disabled={isDisabled}
          onChange={handleChange}
        >
          {options.map((eachOption: IKeys) => {
            return <MenuItem value={eachOption.id}>{eachOption.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
