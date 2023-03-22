import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { rolesList as rolesObject } from '../../utils/rolesList';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const rolesList = Object.keys(rolesObject).map(key => ({ title: key, code: rolesObject[key] }));

const MultiSelectCheckBoxDropDown = ({ label, name, size, setValue, prevSelected, placeholder }) => {

    let defaultValueList = prevSelected ?
        prevSelected.map(code => (rolesList.find(entry => entry.code === Number.parseInt(code)))) :
        [];

    return (
        <Autocomplete
            size={size}
            fullWidth
            multiple
            disableCloseOnSelect
            defaultValue={prevSelected && defaultValueList}
            options={rolesList}
            getOptionLabel={(option) => option.title}
            onChange={(_event, value) => {
                if (value !== null) {
                    setValue(
                        name,
                        value.map(each => each.code),
                        {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true,
                        }
                    );
                }
            }}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: '100%', transform: 'translateY(0.1em)' }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                    sx={{
                        '& .MuiChip-root': {
                            margin: '0 2px'
                        }
                    }}
                />
            )}
        />
    );
}

export default MultiSelectCheckBoxDropDown;