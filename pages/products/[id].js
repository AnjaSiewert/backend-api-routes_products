import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";

  return (
    <section key={data.id}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>{data.price}</p>
      <p>{data.curreny}</p>
      <p>{data.category}</p>
    </section>
  );
}
