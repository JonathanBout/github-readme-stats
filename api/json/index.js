import { fetchTopLanguages } from "../../src/fetchers/top-languages-fetcher.js";
import { parseArray } from "../../src/common/utils.js";

export default async (req, res) => {
  const username = process.env.GH_USERNAME;
  const { exclude_repo, size_weight, count_weight, exclude_langs } = req.query;

  try {
    const topLangs = await fetchTopLanguages(
      username,
      parseArray(exclude_repo),
      size_weight,
      count_weight,
      parseArray(exclude_langs),
    );

    res.json(topLangs);
  } catch (err) {
    res.status(400).json({ error: err }); // Bad Request
  }
};
