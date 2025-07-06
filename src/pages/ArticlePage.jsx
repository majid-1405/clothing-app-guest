import { useEffect, useState } from "react";
import { ArticleAPI } from "../services/ArticleAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";
import ArticleList from "../components/Articlelist";

export default function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchArticle = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await ArticleAPI.fetchArticles();
      setArticle(data);
    } catch (err) {
      setError("Gagal mengambil data artikel");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div className="w-full px-4 bg-gray-100 min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Daftar Artikel
      </h1>

      {loading && <Loading />}
      {!loading && error && <Error message={error} />}
      {!loading && !error && article.length === 0 && (
        <EmptyState message="Belum ada artikel." />
      )}

      {!loading && !error && article.length > 0 && (
        <ArticleList products={article} />
      )}
    </div>
  );
}
