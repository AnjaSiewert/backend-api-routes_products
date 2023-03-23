import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";

  return data.map((product) => {
    return (
      <section key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.curreny}</p>
        <p>{product.category}</p>
      </section>
    );
  });
}
