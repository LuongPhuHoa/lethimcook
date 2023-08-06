import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import IngredientButton from './IngredientButton';

export default function SearchCard() {
  return (
    <Card className="overflow-hidden p-6 px-1 flex flex-col rounded-3xl max-h-full">
      <CardHeader className="shadow-none">
        <p className="p-3 pb-1 text-gray-700 text-bold text-2xl font-normal">
          Vegetables
        </p>
      </CardHeader>
      <hr className="mx-4 px-4" />
      <CardBody>
        <div className="grid grid-cols-4 gap-2">
          <IngredientButton name="Carrot" />
          <IngredientButton name="sa sadfsdf sdfdfgdsfgsdfg" />
          <IngredientButton name="Carrot" />
          <IngredientButton name="Carrot" />
          <IngredientButton name="Carrot" />
          <IngredientButton name="Carrot" />
          <IngredientButton name="Carrot" />
        </div>
      </CardBody>
    </Card>
  );
}
