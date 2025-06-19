import { useEffect } from "react";
import { initialItems } from "@utils/data";

export const useFetchItems = (setItems, setLoading, setError, items) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(initialItems), 2000)
        );
        setItems(data);
      } catch (error) {
        setError(`Failed to fetch items: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    if (items.length === 0) {
      fetchData();
    }
  }, [setItems, setLoading, setError, items.length]);
};
