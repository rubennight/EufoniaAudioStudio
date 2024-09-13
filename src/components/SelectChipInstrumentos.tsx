import { Box, Chip, MenuItem, Select } from "@mui/material";
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  

const SelectChipInstrumentos: React.FC <{ instrumentos: Instrumento[], width: number }> = ({ instrumentos, width = 300 }) => {
    const [selectedInstrumentos, setSelectedInstrumentos] = React.useState<string[]>([]);

    const handleChange = (event: any) => {
        const { target: { value } } = event;
        setSelectedInstrumentos(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const colors = ['#0092CE', '#E98D27', '#E7AE40', ];

    const getChipColor = (index: number) => {
        return colors[index % colors.length]; // Alterna entre los colores en el array
    };

    return(
            <Select 
                multiple
                variant="standard"
                value={selectedInstrumentos}
                onChange={handleChange}
                MenuProps={MenuProps}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {(selected as string[]).map((nombre, index) => (
                        <Chip 
                            key={nombre} 
                            label={nombre} 
                            sx={{ backgroundColor: getChipColor(index), color: 'white' }}
                            />
                        ))}
                    </Box>
                )}
                sx={{ width: width }}
                >
                    {instrumentos.map((instrumento) => (
                        <MenuItem key={instrumento.id} value={instrumento.nombre}>
                            {instrumento.nombre}
                        </MenuItem>
                    ))}
            </Select>
    );
}

export default SelectChipInstrumentos;