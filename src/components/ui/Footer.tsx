import React from 'react';
import { cn } from '../../lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'simple' | 'centered' | 'complex';
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant = 'simple', ...props }, ref) => {
    const variants = {
      simple: (
        <footer
          ref={ref}
          className={cn("bg-white border-t border-gray-200", className)}
          {...props}
        >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
            <div className="mt-4 flex justify-center md:mt-0">
              <div className="flex space-x-6">
                {/* Add your social links here */}
              </div>
            </div>
          </div>
        </footer>
      ),
      centered: (
        <footer
          ref={ref}
          className={cn("bg-white border-t border-gray-200", className)}
          {...props}
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mt-8 flex justify-center space-x-6">
                {/* Add your social links here */}
              </div>
              <p className="mt-8 text-sm text-gray-500">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
      complex: (
        <footer
          ref={ref}
          className={cn("bg-white border-t border-gray-200", className)}
          {...props}
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8">
                <p className="text-sm text-gray-500">
                  Making the world a better place through constructing elegant hierarchies.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Solutions</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {/* Add your links here */}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {/* Add your links here */}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {/* Add your links here */}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {/* Add your links here */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    };

    return variants[variant];
  }
);

Footer.displayName = 'Footer';

export { Footer };