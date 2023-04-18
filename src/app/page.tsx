'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Center, GridItem, Heading, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
	return (
		<>
			<Box className={styles.bgImgContainer}>
				<Image
					src='/assets/bg.png'
					alt='Background image'
					fill
					quality={90}
					blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAAwAFYDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABAACBQYHAwH/xAAuEAABAwIEAwYHAQAAAAAAAAABAAIDBBEFEiFBBjFRExUyYWKRIkJxgaGx8IL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8Aho6G+yIZhx6Kfiw70lGR4cBspqXyrbcN9K6DDfJWZtAOieKAdFdZ4VXu3yTXYdYclajQDouL6AK6nKpyUFtkPJReStctCBfRBS0YF9EOVXkpLbIWSmtfRWWWlA2QM9OBdTVkV98OvJJSE0OqSKs9LxKWtLaiEsltuDr7J0XFUjHjMztGE6nUFZvHjtSxoDhG+27m6ldYeIp2OPaRMc2/Jri0hY5a6rU4OJI3kZmkHfoi243GTplcD6rH8rLncUxBloaU5+sknL2QcvEFfK6/blg2azQKzyvTWZ8eZE7IGZnnwta4G6jKriqalqfjgjfDvbQ/Y/11mL8QqZCXPme4nS5cV7LiVTO1rZJnOyiwJ5rUjFtasziWgqQMma55gjULnLi1G4lodqsqbWzscHNlcCN0SzHaxos94lHrF/ymG1oUtVTEaPCAnkiN7OHuqf368+OEf5cU7vaFzde0aTtzTDanJnMzaOHukq+6tiJ0l/aSYIgBJFNgZbkntgZfwooK2nMJ7GucCWkfCLm5UrDDHuxp+qIBY0aRsH2QQl7aG5XmbWwB+6mXuafkYuUmW98jUEWDmNrH9pa3tY+ylGPDTcCxHQrxxYTcjn5lERZP19l5r/BSJLRsubnDyQAklJFHLuAkiv/Z'
					placeholder='blur'
					className={styles.bgImg}
				/>
			</Box>
			<Center className={styles.cardContainer}>
				<Box className={styles.card}>
					<Heading as='h1'>About me</Heading>
					<SimpleGrid
						columns={2}
						spacing={2.5}
						templateColumns='auto 1fr'
					>
						<GridItem colSpan={2}>
							<hr className={styles.cardDivider} />
						</GridItem>
						<Text as='b'>Name:</Text>
						<Text className={styles.cardText}>Oleh Proidakov</Text>
						<Text as='b'>Age:</Text>
						<Text className={styles.cardText}>
							{new Date(Date.now() - new Date('6 Nov 2003').getTime()).getUTCFullYear() - 1970}
						</Text>
						<GridItem colSpan={2}>
							<hr className={styles.cardDivider} />
						</GridItem>
						<Text as='b'>Email:</Text>
						<Text className={styles.cardText}>
							<Tooltip
								label='oleh.proidakov@gmail.com'
								placement='bottom-start'
							>
								<Link
									href='mailto:oleh.proidakov@gmail.com'
									target='_blank'
									rel='noopener noreferrer'
								>Link</Link>
							</Tooltip>
						</Text>
						<GridItem colSpan={2}>
							<hr className={styles.cardDivider} />
						</GridItem>
						<Text as='b'>GitHub:</Text>
						<Text className={styles.cardText}>
							<Link
								href='https://github.com/GodHermit'
								target='_blank'
								rel='noopener noreferrer'
							>@GodHermit</Link>
						</Text>
						<Text as='b'>CodePen:</Text>
						<Text className={styles.cardText}>
							<Link
								href='https://codepen.io/GodHermit'
								target='_blank'
								rel='noopener noreferrer'
							>@GodHermit</Link>
						</Text>
						<GridItem colSpan={2}>
							<hr className={styles.cardDivider} />
						</GridItem>
						<Text as='b'>LinkedIn:</Text>
						<Text className={styles.cardText}>
							<Tooltip
								label='in/oleh-proidakov'
								placement='bottom-start'
							>
								<Link
									href='https://www.linkedin.com/in/oleh-proidakov/'
									target='_blank'
									rel='noopener noreferrer'
								>Link</Link>
							</Tooltip>
						</Text>
						<Text as='b'>Telegram:</Text>
						<Text className={styles.cardText}>
							<Link
								href='https://t.me/GodHermit'
								target='_blank'
								rel='noopener noreferrer'
							>@GodHermit</Link>
						</Text>
					</SimpleGrid>
				</Box>
			</Center>
		</>
	);
}