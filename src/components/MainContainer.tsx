import * as React from 'react';

const MainContainer: React.FunctionComponent<any> = ({ children }) => (
	<div className="bg-slate-100 min-h-screen">{children}</div>
);

export default MainContainer;
