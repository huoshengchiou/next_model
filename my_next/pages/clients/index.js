import Link from "next/link";

const Clients = () => {
  const clients = [{ id: "max" }, { id: "jack" }];

  return (
    <div>
      <h1>Clients pages</h1>
      {clients.map((client) => (
        <Link
          key={client.id}
          href={{ pathname: "/clients/[id]", query: { id: client.id } }}
        >
          {client.id}
        </Link>
      ))}
    </div>
  );
};

export default Clients;
