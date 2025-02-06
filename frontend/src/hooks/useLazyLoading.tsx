import { useState, useEffect, useRef } from "react";

const useLazyLoad = (
  fetchData: (page: number) => Promise<any[]>,
  initialPage = 1
) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const loadMore = async () => {
      setIsLoading(true);
      const newData = await fetchData(page);
      setData((prev) => [...prev, ...newData]);
      setIsLoading(false);
      if (newData.length === 0) {
        setHasMore(false);
      }
    };

    loadMore();
  }, [page, fetchData]);

  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        setPage((prev) => prev + 1);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [hasMore, isLoading]);

  return { data, isLoading, lastElementRef };
};

export default useLazyLoad;
