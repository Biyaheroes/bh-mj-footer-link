"use strict";
d		Copyright (@c) 2017 Biyaheroes Developers

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "detail",
			"path": "detail/detail.jsx",
			"file": "detail.jsx",
			"module": "detail",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Detail List Component.
	@end-module-documentation

	@include:
		{
			"MJMLElement": "mjml-core",
			"React": "react",
			"Component": "react.Component",
			"Column": "mjml-column",
			"Detail": "bh-mj-detail",
			"Section": "mjml-section"
		}
	@end-include
*/

import { MJMLElement } from "mjml-core";
import React, { Component } from "react";
import Column from "mjml-column";
import Detail from "bh-mj-detail";
import Section from "mjml-section";
import Text from "mjml-text";
import Wrapper from "mjml-wrapper";

import filpos from "filpos";
import nbyx from "nbyx";
import parseon from "parseon";
import protype from "protype";
import sxty4 from "sxty4";

const tagName = "mj-footer-link";

const parentTag = [ "mj-container" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"count": 3,
		"list": [ {
			"title": "Title",
			"link": "Link"
		} ]
	},
};

@MJMLElement
class FooterLink extends Component {
	render( ){
		const { mjAttribute } = this.props;

		let list = mjAttribute( "list" );

		let count = 3;
		try{
			count = parseInt( mjAttribute( "count" ) || "3" );

		}catch( error ){
			count = 3;
		}

		if( protype( list, STRING ) ){
			try{
				list = parseon( sxty4( list ).decode( ) );

			}catch( error ){
				error = sxty4( error.stack ).encode( );
				let length = error.length;
				error = error
					.match( new RegExp( `.{1,${ Math.floor( Math.sqrt( length ) ) }}`, "g" ) )
					.join( "\n" );

				return ( <Section
							{ ...this.props }
						>
							<Column>
								{
									[
										<Text key="prompt">
											{ "Sorry, there's something wrong with the details. Please report this immediately." }
										</Text>,
										<Text key="error">
											{ `Error: ${ error }` }
										</Text>,
										<Text key="timestamp">
											{ `Timestamp: ${ new Date( ) }` }
										</Text>
									]
								}
							</Column>
						</Section> );
			}
		}

		list = nbyx( list, count )
			.map( ( row ) => filpos( row, 3, { "title": "", "link": "" } ) );

		return ( <Wrapper
					{ ...this.props }
					padding="0px 0px 0px 0px"
					full-width="full-width"
				>
					{
						list.map( function onEachRow( row, index ){
							return ( <Section
										background-color="#3290cf"
										key={ `row-${ index }` }
										padding="0px 0px 0px 0px"
									>
										{
											row.map( function onEachDetail( detail, index ){
												return ( <FooterLink
															{ ...detail }
															key={ `detail-${ index }` }
															count={ 3 }
														>
														</FooterLink> );
											} )
										}
									</Section> );
						} )
					}
				</Wrapper> );
	}
}

FooterLink.tagName = tagName;
FooterLink.parentTag = parentTag;
FooterLink.endingTag = endingTag;
FooterLink.defaultMJMLDefinition = defaultMJMLDefinition;

export default FooterLink;
