import { vi } from 'vitest';
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals';
import reportWebVitals from './reportWebVitals';

describe('reportWebVitals.test.ts', () => {
  const reportHandler = console.log;
  const reportOptions = undefined;

  beforeAll(() => {
    vi.mock('web-vitals');
  });

  afterAll(() => {
    vi.unmock('web-vitals');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should not call anyWebVitals if a report handler was not passed in', async () => {
    await reportWebVitals();
    expect(onCLS).not.toHaveBeenCalled();
    expect(onFCP).not.toHaveBeenCalled();
    expect(onFID).not.toHaveBeenCalled();
    expect(onINP).not.toHaveBeenCalled();
    expect(onLCP).not.toHaveBeenCalled();
    expect(onTTFB).not.toHaveBeenCalled();
  });

  it('should register the Cumulative Layout Shift (CLS) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onCLS).toHaveBeenCalledTimes(1);
    expect(onCLS).toHaveBeenCalledWith(reportHandler, reportOptions);
  });

  it('should register the First Contentful Paint (FCP) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onFCP).toHaveBeenCalledTimes(1);
    expect(onFCP).toHaveBeenCalledWith(reportHandler, reportOptions);
  });

  it('should register the First Input Delay (FID) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onFID).toHaveBeenCalledTimes(1);
    expect(onFID).toHaveBeenCalledWith(reportHandler, reportOptions);
  });

  it('should register the Interaction to next Paint (INP) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onINP).toHaveBeenCalledTimes(1);
    expect(onINP).toHaveBeenCalledWith(reportHandler, reportOptions);
  });

  it('should register the Largest Contentful Paint (LCP) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onLCP).toHaveBeenCalledTimes(1);
    expect(onLCP).toHaveBeenCalledWith(reportHandler, reportOptions);
  });

  it('should register the Time to First Byte (TTFB) metric reporter', async () => {
    await reportWebVitals(reportHandler, reportOptions);
    expect(onTTFB).toHaveBeenCalledTimes(1);
    expect(onTTFB).toHaveBeenCalledWith(reportHandler, reportOptions);
  });
});
