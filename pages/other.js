import Link from 'next/link';
import Layout from '../components/Layout';

export default () => <div>
	<Layout header="Other" title="Other page.">
		<p>This is Other page.</p>
		<hr/>
		<Link href="/">
			<button>
				&lt;&lt; Back to Top page
			</button>
		</Link>
	</Layout>
</div>