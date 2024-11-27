import { format } from "date-fns";

export const formatDateIso = (date: string) => {
    return !date ? "" : format(new Date(date), 'PPP')
}