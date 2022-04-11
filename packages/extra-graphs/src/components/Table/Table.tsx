import React, { useRef } from "react";
import { Container } from "./Table.style";
import { useMount } from "react-use";

export type TableProps = {};

const html = `   <table className="CtorL ipoXK fullscreen-normal-text fullscreen-night-text">
<thead>
  <tr>
    <th className="TableInteractive-headerCellData cellData text-brand-hover text-medium">
      <div className="relative">
        <svg
          className="Icon Icon-chevronup Icon__StyledIcon-oj89wd-1 boNzPM"
          viewBox="0 0 32 32"
          width="8"
          height="8"
          fill="currentcolor"
          role="img"
          aria-label="chevronup icon"
          style="position: absolute; right: 100%; margin-right: 3px;"
        >
          <path d="M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z"></path>
        </svg>
        <div
          className=""
          style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
        >
          Logo
        </div>
      </div>
    </th>
    <th className="TableInteractive-headerCellData cellData text-brand-hover text-medium">
      <div className="relative">
        <svg
          className="Icon Icon-chevronup Icon__StyledIcon-oj89wd-1 boNzPM"
          viewBox="0 0 32 32"
          width="8"
          height="8"
          fill="currentcolor"
          role="img"
          aria-label="chevronup icon"
          style="position: absolute; right: 100%; margin-right: 3px;"
        >
          <path d="M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z"></path>
        </svg>
        <div
          className=""
          style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
        >
          Vendor_Card
        </div>
      </div>
    </th>
    <th className="TableInteractive-headerCellData cellData text-brand-hover text-medium text-right">
      <div className="relative">
        <svg
          className="Icon Icon-chevronup Icon__StyledIcon-oj89wd-1 boNzPM"
          viewBox="0 0 32 32"
          width="8"
          height="8"
          fill="currentcolor"
          role="img"
          aria-label="chevronup icon"
          style="position: absolute; right: 100%; margin-right: 3px;"
        >
          <path d="M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z"></path>
        </svg>
        <div
          className=""
          style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
        >
          Spend_in_Period
        </div>
      </div>
    </th>
  </tr>
</thead>
<tbody>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">iDigital</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">152,055.63</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/google.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Google</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">96,204.45</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">g-plus</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">56,989.38</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/amazon.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Amazon</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">23,843.78</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/outreach.io"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Outreach</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">19,945.84</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Bing</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">19,836.54</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/linkedin.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">LinkedIn</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">17,737.31</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/demostack.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Demostack</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">16,440</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/netsuite.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">NetSuite</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">14,243.63</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">SCHNIEDER COMPUTING </div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">12,736.16</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">AWS</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">10,972.39</span>
    </td>
  </tr>
  <tr data-testid="table-row">
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <img
          src="https://logo.clearbit.com/payemcard.com"
          style="height: 30px;"
        />
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block cursor-pointer text-brand-hover">
        <div className="link link--wrappable">Ksp</div>
      </span>
    </td>
    <td
      className="px1 border-bottom text-dark fullscreen-normal-text fullscreen-night-text text-bold text-right"
      style="white-space: nowrap;"
    >
      <span className="cellData inline-block">10,691.85</span>
    </td>
  </tr>
</tbody>
</table>`;

export function Table(_props: TableProps) {
  const ref = useRef(null);

  useMount(() => {
    ref.current.innerHTML = html;
  });

  return (
    <Container
      className="Table-container"
      data-testid="Table-container"
      ref={ref}
    ></Container>
  );
}

export default Table;
