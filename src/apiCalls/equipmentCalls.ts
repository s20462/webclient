import { get, post, put, del } from "./basicCalls";
import { EquipmentDto } from "../helpers/apiTypes";

// Get all equipments
export const getEquipments = () => get("equipment");

// Get equipment by id
export const getEquipmentById = (id: number) => get(`equipment/${id}`);

// Creates new equipment
export const createEquipment = (data: Readonly<EquipmentDto>) => post("equipment", JSON.stringify(data));

// Modify equipment
export const updateEquipment = (id: number, data: Readonly<EquipmentDto>) => put(`equipment/${id}`, JSON.stringify(data));

// Delete equipment
export const deleteEquipment = (id: number) => del(`equipment/${id}`);
