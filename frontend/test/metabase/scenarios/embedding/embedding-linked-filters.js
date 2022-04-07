import { SAMPLE_DATABASE } from "__support__/e2e/cypress_sample_database";

const { PEOPLE } = SAMPLE_DATABASE;

export const nativeQuestionDetails = {
  name: "Count of People by State (SQL)",
  native: {
    query:
      'SELECT "PUBLIC"."PEOPLE"."STATE" AS "STATE", count(*) AS "count" FROM "PUBLIC"."PEOPLE" WHERE 1=1 [[ AND {{city}}]] [[ AND {{state}}]] GROUP BY "PUBLIC"."PEOPLE"."STATE" ORDER BY "count" DESC, "PUBLIC"."PEOPLE"."STATE" ASC',
    "template-tags": {
      city: {
        id: "6b8b10ef-0104-1047-1e1b-2492d5954555",
        name: "city",
        "display-name": "City",
        type: "dimension",
        dimension: ["field", PEOPLE.CITY, null],
        "widget-type": "category",
      },
      state: {
        id: "6b8b10ef-0104-1047-1e1b-24s2d5954545",
        name: "state",
        "display-name": "State",
        type: "dimension",
        dimension: ["field", PEOPLE.STATE, null],
        "widget-type": "category",
      },
    },
  },
  display: "bar",
};

const stateFilter = {
  name: "State",
  slug: "state",
  id: "e8f79be9",
  type: "location/state",
};

const cityFilter = {
  name: "City",
  slug: "city",
  id: "170b8e99",
  type: "location/city",
  filteringParameters: [stateFilter.id],
};

export const nativeDashboardDetails = {
  name: "Embedding Dashboard With Linked Filters",
  parameters: [stateFilter, cityFilter],
};

export function mapNativeDashboardParameters({
  id,
  card_id,
  dashboard_id,
} = {}) {
  return cy.request("PUT", `/api/dashboard/${dashboard_id}/cards`, {
    cards: [
      {
        id,
        card_id,
        row: 0,
        col: 0,
        sizeX: 18,
        sizeY: 10,
        parameter_mappings: [
          {
            parameter_id: stateFilter.id,
            card_id,
            target: ["dimension", ["template-tag", stateFilter.slug]],
          },
          {
            parameter_id: cityFilter.id,
            card_id,
            target: ["dimension", ["template-tag", cityFilter.slug]],
          },
        ],
      },
    ],
  });
}
