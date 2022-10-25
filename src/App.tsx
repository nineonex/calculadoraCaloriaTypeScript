import "./style.css";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

export function App() {
  return (
    <div className='container'>
      <header className='header'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          width={45}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
          />
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
          />
        </svg>
        <span>Calculadora de Calorias</span>
      </header>
      <section className='inputs'>
        <FormControl fullWidth margin='dense'>
          <InputLabel id='inputSexo'>Sexo</InputLabel>
          <Select>
            <MenuItem value={"homem"}>Homem</MenuItem>
            <MenuItem value={"mulher"}>Mulher</MenuItem>
          </Select>
        </FormControl>
        <TextField />
        <TextField />
        <TextField />
        <FormControl fullWidth margin='dense'>
          <InputLabel id='inputAtividadeFisica'>
            Nivel de Atividade Fisica
          </InputLabel>
          <Select>
            <MenuItem value={0}>Sedentario</MenuItem>
            <MenuItem value={1}>Pouca atividade</MenuItem>
            <MenuItem value={2}>Atividade moderada</MenuItem>
            <MenuItem value={3}>Atividade intensa</MenuItem>
            <MenuItem value={4}>Atividade muito intensa</MenuItem>
          </Select>
        </FormControl>
        <Button>Calcular</Button>
      </section>
    </div>
  );
}
