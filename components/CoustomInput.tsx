import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath, Form, UseFormReturn } from "react-hook-form";
import { authformSchema } from "@/lib/utils";
import { z } from "zod";

const formschema = authformSchema("sign-up");

interface coustomprops {
  control: Control<z.infer<typeof formschema>>;
  name: FieldPath<z.infer<typeof formschema>>;
  label: string;
  placeholder: string;
}
const CoustomInput = ({ control, name, label, placeholder }: coustomprops) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                type={name === "password" ? "password" : "text"}
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CoustomInput;
