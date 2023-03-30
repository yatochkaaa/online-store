import { makeAutoObservable } from "mobx";

export interface IType {
  id?: number;
  name: string;
}

export interface IBrand {
  id?: number;
  name: string;
}

export interface IDevice {
  id?: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: { id: number; title: string; description: string }[];
}

export class DeviceStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType | null;
  _selectedBrand: IBrand | null;
  _page: number;
  _totalCount: number;
  _limit: number;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types: IType[]) {
    this._types = types;
  }

  setBrands(brands: IBrand[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  setSelectedType(type: IType) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand: IBrand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page: number) {
    this._page = page;
  }

  setTotalCount(totalCount: number) {
    this._totalCount = totalCount;
  }

  setLimit(limit: number) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
