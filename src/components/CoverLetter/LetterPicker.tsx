import React from 'react';

import styles from './cover-letter.styles';
import { CoverLetterData } from 'models';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface Props {
  letters: CoverLetterData[];
  onLetterChanged: (letter: CoverLetterData) => void;
}


const LetterPicker: React.FC<Props> = props => {
  const { letters, onLetterChanged } = props;
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, child: React.ReactNode) => {
    const letter = child as CoverLetterData;
    onLetterChanged(letter);
  };
  
  return (
    <FormControl>
      <InputLabel htmlFor="age-simple">Age</InputLabel>
      <Select
        onChange={handleChange}
        
      >
        {letters.map(letter => (
          <MenuItem key={letter.id}>{letter.name}</MenuItem>  
        ))}
      </Select>
    </FormControl>
  );
};

export default LetterPicker;
