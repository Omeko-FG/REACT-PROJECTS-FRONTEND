import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const TavsiyeSayfasi = () => {
  const [tavsiyeMetni, setTavsiyeMetni] = useState('');

  const handleMetinDegisikligi = (event) => {
    setTavsiyeMetni(event.target.value);
  };

  const handleFormGonder = () => {
    // Tavsiye metnini işleme veya gönderme işlemlerini burada gerçekleştirin
    console.log(tavsiyeMetni);
  };

  return (
    <div className='cont'><div className='advice'>
    <TextField
      label="Tavsiye veya önerinizi yazın"
      value={tavsiyeMetni}
      onChange={handleMetinDegisikligi}
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      margin="normal"
    />
    <Button variant="contained" color="primary" onClick={handleFormGonder}>
      Gönder
    </Button>
    <div className='social'>
    <a href="https://www.linkedin.com/in/omer-faruk-gurbuz/"><LinkedInIcon/></a>
    <a href="https://www.instagram.com/omergurbuz_fg/"><InstagramIcon/></a>
    <a href="https://github.com/Omeko-FG"><GitHubIcon/></a>
    </div>
  </div></div>
    
  );
};

export default TavsiyeSayfasi;
