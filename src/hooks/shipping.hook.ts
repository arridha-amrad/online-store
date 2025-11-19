import { IdWithName } from "@/types";
import { useEffect, useState } from "react";

const fetchCities = async (provinceId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/shipping?fetchType=cities&provinceId=${provinceId}`
  );
  const data = await res.json();
  return data;
};

const fetchDistricts = async (cityId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/shipping?fetchType=districts&cityId=${cityId}`
  );
  const data = await res.json();
  return data;
};

export const useFetchCities = (provinceId: string | null) => {
  const [cities, setCities] = useState<IdWithName[]>([]);

  useEffect(() => {
    if (provinceId) {
      fetchCities(provinceId).then((data) => setCities(data));
    }
  }, [provinceId]);

  return cities;
};

export const useFetchDistricts = (cityId: string | null) => {
  const [districts, setDistricts] = useState<IdWithName[]>([]);

  useEffect(() => {
    if (cityId) {
      fetchDistricts(cityId).then((data) => setDistricts(data));
    }
  }, [cityId]);

  return districts;
};
