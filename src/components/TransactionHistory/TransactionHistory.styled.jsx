import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  margin-bottom: 200px;
  margin-top: 50px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  tbody td {
    color: rgb(88, 85, 85);
    padding: 10px 70px;
    font-size: 12px;
  }
  thead th {
    color: white;
    padding: 10px 70px;
    text-transform: uppercase;
    text-align: left;
    background-color: rgb(42, 166, 166);
  }
  tbody td,
  thead th {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  thead tr th:first-child,
  tbody tr td:first-child {
    border-left: none;
  }
  thead tr th:last-child,
  tbody tr td:last-child {
    border-right: none;
  }

  tbody tr:nth-child(even) {
    background: #e7e6ea;
  }
`;
