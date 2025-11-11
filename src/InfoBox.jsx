import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function InfoBox({ info }) {
  const { name, capital, population, flags, region, subregion, languages } =
    info;

  const langList = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "30px auto",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        padding: 2,
        background: "linear-gradient(135deg, #f6d365, #fda085)",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="200"
          image={flags?.png}
          alt={flags?.alt || `Flag of ${name.common}`}
        />

        {flags?.alt && (
          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 2,
              fontStyle: "italic",
              color: "rgba(0, 0, 0, 0.8)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "5px",
              p: 2,
            }}
          >
            {flags.alt}
          </Typography>
        )}

        <Typography variant="h4" gutterBottom align="center" marginTop={2}>
          {name.common}
        </Typography>

        <Typography variant="body1">
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </Typography>

        <Typography variant="body1">
          <strong>Region:</strong> {region}
        </Typography>

        <Typography variant="body1">
          <strong>Subregion:</strong> {subregion}
        </Typography>

        <Typography variant="body1">
          <strong>Population:</strong> {population.toLocaleString()}
        </Typography>

        <Typography variant="body1">
          <strong>Languages:</strong> {langList}
        </Typography>
      </CardContent>
    </Card>
  );
}
