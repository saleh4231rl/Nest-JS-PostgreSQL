export interface Nesttest {
    id: string,
    nama: string,
    hobi: string,
    status: nesttestStatus;
}

export enum nesttestStatus{
    OPEN = "OPEN",
    PRESTASI = "PRESTASI",
    PENGURUS = "PENGURUS"
}