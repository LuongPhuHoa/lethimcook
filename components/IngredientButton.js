import React from 'react';
import { Button } from '@material-tailwind/react';

export default function ButtonRounded({ name }) {
  return (
    <Button className="rounded-full text-gray-500 font-semibold bg-slate-200 p-3 hover:bg-slate-300">
      { name }
    </Button>
  );
}
