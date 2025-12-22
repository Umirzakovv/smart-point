import { Col, Row } from 'antd';
import { memo, type ReactNode } from 'react';
import type { IDrawer } from 'shared/lib/types/drawer';

interface Props {
  main: ReactNode;
  drawers: IDrawer[];
}

const ALL_SPANS = 24;

export const GridContentWrapper = memo(({ main, drawers }: Props) => {
  const usedSpans = drawers.reduce((s, i) => s + i.span, 0);

  if (usedSpans > ALL_SPANS) {
    console.warn('Span of content is bigger than 24');
  }

  return (
    <Row gutter={[8, 8]} className="h-full overflow-hidden" wrap={false}>
      <Col span={ALL_SPANS - usedSpans} className="grid-col-transition">
        <div className="h-full overflow-auto rounded-3xl bg-white p-6">{main}</div>
      </Col>

      {drawers.map((item) => (
        <Col key={item.id} span={item.span} className="grid-col-transition">
          <div className="h-full overflow-auto rounded-3xl bg-white p-6">{item.content}</div>
        </Col>
      ))}
    </Row>
  );
});
