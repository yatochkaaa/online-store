import { $authHost, $host } from ".";
import { IBrand, IType } from "../store/DeviceStore";

interface Params {
  typeId?: number | null;
  brandId?: number | null;
  page?: number;
  limit?: number;
}

export const createType = async (type: IType) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand: IBrand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device: FormData) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (
  typeId?: number | null,
  brandId?: number | null,
  page?: number,
  limit = 5
) => {
  const params: Params = {
    limit,
  };

  if (typeId) {
    params.typeId = typeId;
  }

  if (brandId) {
    params.brandId = brandId;
  }

  if (page) {
    params.page = page;
  }

  const { data } = await $host.get("api/device", { params });
  return data;
};

export const fetchOneDevice = async (id: number) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
