import styled from 'react-emotion'
import React from 'react';

const toScriptImport = url => `<script type="text/javascript" src="${url}"></script>`

const Container = styled('div')`
  padding: 40px;
`

const Entry = styled('div')`
  margin: 10px 0;
`

const Credits = styled('div')`
  text-align: center;
  width: 100%;
`


export function Results({entries}) {
  return (
    <div>
      <Container>
      {entries.map(entry => (
        <Entry key={entry.id}>{toScriptImport(entry.url)}</Entry>
      ))}
      </Container>

      <Credits>
        Made by <a href="https://twitter.com/svensauleau">@svensauleau</a>
      </Credits>
    </div>
  );
}
