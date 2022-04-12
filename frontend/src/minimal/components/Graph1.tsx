import { t } from "ttag";
import React from "react";
import { _analyticTraffic } from "../_mock";
import { fShortenNumber } from "../utils/formatNumber";
import {
  Box,
  Grid,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { ThemeProvider } from "../theme";

export class Graph1 extends React.Component {
  static uiName = t`Line`;
  static identifier = "line";
  static iconName = "line";
  static noun = t`line chart`;

  render() {
    return (
      <ThemeProvider>
        {window.innerWidth > 2000 && <CardHeader title="Company Summary" />}
        <CardContent>
          <Grid container spacing={2}>
            {_analyticTraffic.map(site => (
              <SiteItem key={site.name} site={site} />
            ))}
          </Grid>
        </CardContent>
      </ThemeProvider>
    );
  }
}

type SiteItemProps = {
  site: {
    name: string;
    value: number;
    icon: React.ReactElement;
  };
};

function SiteItem({ site }: SiteItemProps) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h4" color="#767676">
          {fShortenNumber(value)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}
