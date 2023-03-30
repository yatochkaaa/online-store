import { makeAutoObservable } from "mobx";

export interface IType {
  id: number;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export class DeviceStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType | null;
  _selectedBrand: IBrand | null;

  constructor() {
    this._types = [
      {
        id: 1,
        name: "Холодильники",
      },
      {
        id: 2,
        name: "Телефоны",
      },
      {
        id: 3,
        name: "Телевизоры",
      },
      {
        id: 4,
        name: "Ноутбуки",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Samsung",
      },
      {
        id: 2,
        name: "Apple",
      },
      {
        id: 3,
        name: "Lenovo",
      },
      {
        id: 4,
        name: "Asus",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://content1.rozetka.com.ua/goods/images/big/175435404.jpg",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://content1.rozetka.com.ua/goods/images/big/175435404.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://content1.rozetka.com.ua/goods/images/big/175435404.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://content1.rozetka.com.ua/goods/images/big/175435404.jpg",
      },
    ];
    this._selectedType = null;
    this._selectedBrand = null;
    makeAutoObservable(this);
  }

  setType(types: IType[]) {
    this._types = types;
  }

  setBrand(brands: IBrand[]) {
    this._brands = brands;
  }

  setDevice(devices: IDevice[]) {
    this._devices = devices;
  }

  setSelectedType(type: IType) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: IBrand) {
    this._selectedBrand = brand;
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

  get selectedBrand() {
    return this._selectedBrand;
  }
}
