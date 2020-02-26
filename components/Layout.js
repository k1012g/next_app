import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';
import Head from 'next/head';

export default class Layout extends Component {
	render(){
		return(
			<div>
				<Head>
					<title>{this.props.title}</title>
					<meta charset='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=devise-width' />
				</Head>
				{style}
				<Header header={this.props.header} title={this.props.title} />
					{this.props.children}
				<Footer footer="copyright SYODA-Tuyuno." />
			</div>
		);
	};
};