import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () => <div>
	<Layout header="Next" title="Top page.">
		<p>Welcome to next.js!</p>
		<Image fname="21savage.jpg" size="250" />
		<hr/>
		<Link href="./other">
			<button>
				Go to Other page &gt;&gt;
			</button>
		</Link>
	</Layout>
</div>