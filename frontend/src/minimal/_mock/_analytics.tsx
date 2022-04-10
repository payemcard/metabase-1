import React from "react";
import Iconify from "../Iconify";
import _mock from "./_mock";

export const _analyticPost = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  description: _mock.text.description(index),
  image: _mock.image.cover(index),
  postedAt: _mock.time(index),
}));

export const _analyticOrderTimeline = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    "1983, orders, $4220",
    "12 Invoices have been paid",
    "Order #37745 from September",
    "New order placed #XF-2356",
    "New order placed #XF-2346",
  ][index],
  type: `order${index + 1}`,
  time: _mock.time(index),
}));

export const _analyticTraffic = [
  {
    name: "Active employees",
    value: 3200,
    icon: <Iconify icon={"bxs:user"} color="#778" width={32} height={32} />,
  },
  {
    name: "Transaction this month",
    value: 341212,
    icon: (
      <Iconify
        icon={"carbon:arrows-horizontal"}
        color="#778"
        width={32}
        height={32}
      />
    ),
  },
  {
    name: "Active virtual cards",
    value: 15094,
    icon: (
      <Iconify
        icon={"bi:credit-card-2-back-fill"}
        color="#778"
        width={32}
        height={32}
      />
    ),
  },
  {
    name: "Active physical cards",
    value: 3400,
    icon: (
      <Iconify
        icon={"bi:credit-card-2-back-fill"}
        color="#778"
        width={32}
        height={32}
      />
    ),
  },
  {
    name: "Hours saved",
    value: 3400,
    icon: <Iconify icon={"bx:time"} color="#778" width={32} height={32} />,
  },
  {
    name: "Top vendor",
    value: 149183,
    icon: (
      <Iconify icon={"eva:facebook-fill"} color="#778" width={32} height={32} />
    ),
  },
];
