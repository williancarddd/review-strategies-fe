
export function translateStatus(status: string) {
  switch (status) {
    case "PENDING":
      return  "Pendente";
    case "COMPLETED":
      return  "Concluído";
    case "SKIPPED":
      return "Pulado";
    default:
      return "";
  }
}
