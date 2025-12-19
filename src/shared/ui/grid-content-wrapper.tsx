import { Col, Row } from 'antd';
import { useEffect, type ReactNode } from 'react';
import type { IDrawer } from 'shared/lib/types/drawer';

interface Props {
  main: ReactNode;
  drawers: IDrawer[];
  setDrawers: React.Dispatch<React.SetStateAction<IDrawer[]>>;
}

const ALL_SPANS = 24;

export const GridContentWrapper = ({ main, drawers }: Props) => {
  const totalSpansOfContent = drawers.reduce((s, i) => s + i.span, 0);

  useEffect(() => {
    if (totalSpansOfContent > 24) {
      console.warn('Span of content is bigger than 24');
    }
  }, [totalSpansOfContent]);

  console.log(ALL_SPANS - totalSpansOfContent);

  return (
    <Row gutter={[8, 8]} className="overflow-hidden h-full" wrap={false}>
      {/* MAIN */}
      <Col span={ALL_SPANS - totalSpansOfContent} className="grid-col-transition">
        <div className="h-full overflow-auto rounded-3xl bg-white p-6">{main}</div>
      </Col>

      {/* DRAWERS */}
      {drawers.map((item) => (
        <Col key={item.id} span={item.span} className="grid-col-transition">
          <div className="drawer h-full overflow-auto rounded-3xl bg-white p-6">{item.content}</div>
        </Col>
      ))}
    </Row>
  );
};
