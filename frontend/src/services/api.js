const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://neri-production.up.railway.app/api";

export async function fetchScenarioBatch(type = "Office Fire", difficulty = "Medium") {
  const response = await fetch(`${API_URL}/scenario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      difficulty,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch scenario");
  }

  return await response.json();
}