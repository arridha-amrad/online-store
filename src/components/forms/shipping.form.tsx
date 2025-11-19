"use client";

import { useAppForm } from "@/hooks/form/useFormHooks";
import { useFetchCities, useFetchDistricts } from "@/hooks/shipping.hook";
import { IdWithName, Shipping } from "@/types";
import { Form } from "@heroui/form";
import { useStore } from "@tanstack/react-form";
import { shippingSchema } from "./schemas";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Radio, RadioGroup, RadioProps } from "@heroui/radio";
import { cn, formatToIdr } from "@/utils";
import { Button } from "@heroui/button";

type Props = {
  provinces: IdWithName[];
  onClose: VoidFunction;
};

const ShippingContext = createContext<{
  couriers: Shipping[];
  setCouriers: Dispatch<SetStateAction<Shipping[]>>;
} | null>(null);

const useShippingContext = () => {
  const context = useContext(ShippingContext);
  if (!context) {
    throw new Error(
      "useShippingContext must be wrapped inside ShippingContextProvider"
    );
  }
  return context;
};

export default function ShippingForm({ provinces, onClose }: Props) {
  const [couriers, setCouriers] = useState<Shipping[]>([]);
  return (
    <ShippingContext.Provider value={{ couriers, setCouriers }}>
      <div className="w-full">
        <div className="mb-4 text-center">
          <h1 className="text-3xl leading-loose font-bold ">Choose Courier</h1>
          <h2 className="text-sm">
            Select your shipping address and courier service.
          </h2>
        </div>
        {couriers.length === 0 ? (
          <AddressForm provinces={provinces} />
        ) : (
          <AvailableCouriers onClose={onClose} />
        )}
      </div>
    </ShippingContext.Provider>
  );
}

const AvailableCouriers = ({ onClose }: { onClose: VoidFunction }) => {
  const [cour, setCour] = useState<string | null>(null);
  const { couriers } = useShippingContext();

  const handlePickCourier = () => {
    console.log({ cour });
    const courier = couriers.find((_, i) => i.toString() === cour);
    console.log({ courier });
    onClose();
  };

  return (
    <div className="space-y-4">
      <RadioGroup value={cour} onValueChange={setCour}>
        {couriers.map((c, i) => (
          <CustomRadio key={i} className="max-w-full" value={i.toString()}>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2">
                <p>
                  {c.code} &middot; {c.etd} &middot;{" "}
                  <span className="text-sm font-light">Rp</span>
                  <span className="font-bold">{formatToIdr(c.cost)}</span>
                </p>
              </div>
              <div className="flex text-foreground/50 text-xs items-center gap-2">
                <h1>
                  {c.service} by {c.name}
                </h1>
              </div>
            </div>
          </CustomRadio>
        ))}
      </RadioGroup>
      <Button color="primary" fullWidth onPress={handlePickCourier}>
        Pick
      </Button>
    </div>
  );
};

const CustomRadio = ({
  children,
  ...props
}: { children: ReactNode } & RadioProps) => {
  return (
    <Radio
      {...props}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse w-full cursor-pointer rounded-lg gap-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

const AddressForm = ({ provinces }: { provinces: IdWithName[] }) => {
  const { setCouriers } = useShippingContext();
  const form = useAppForm({
    defaultValues: {
      provinceId: "",
      cityId: "",
      districtId: "",
      address: "",
    },
    validators: {
      onSubmit: shippingSchema,
    },
    onSubmit: async ({ value }) => {
      console.log({ value });
      const res = await fetch("http://localhost:3000/api/shipping", {
        body: JSON.stringify({
          weight: 1000, // dalam gram
          originId: 1337, // Setiabudi, jaksel, jakarta
          destinationId: value.districtId,
        }),
        method: "POST",
      });
      const data = await res.json();
      console.log(data);
      setCouriers(data);
    },
  });

  const provinceId = useStore(form.store, (state) => state.values.provinceId);
  const cityId = useStore(form.store, (state) => state.values.cityId);

  const cities = useFetchCities(provinceId);
  const districts = useFetchDistricts(cityId);

  useEffect(() => {
    form.resetField("cityId");
    form.resetField("districtId");
  }, [provinceId]);

  useEffect(() => {
    form.resetField("districtId");
  }, [cityId]);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.AppField
        name="provinceId"
        children={(field) => (
          <field.SelectField
            options={provinces}
            placeholder="--Select a province"
            label="Province"
          />
        )}
      />

      <form.AppField
        name="cityId"
        children={(field) => (
          <field.SelectField
            label="City"
            options={cities}
            placeholder="--Select a city"
          />
        )}
      />

      <form.AppField
        name="districtId"
        children={(field) => (
          <field.SelectField
            placeholder="--Select a district"
            options={districts}
            label="District"
          />
        )}
      />

      <form.AppField
        name="address"
        children={(field) => (
          <field.TextAreaField
            label="Address"
            placeholder="Enter shipping address"
          />
        )}
      />

      <form.AppForm>
        <form.SubmitButton label="Find Couriers" />
      </form.AppForm>
    </Form>
  );
};
