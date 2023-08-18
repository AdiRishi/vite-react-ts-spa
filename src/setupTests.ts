/**
 * Provides provides custom DOM element matchers for expect()
 * https://testing-library.com/docs/ecosystem-jest-dom
 */
import '@testing-library/jest-dom/vitest'; // tells typescript about additional expect() matchers
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
