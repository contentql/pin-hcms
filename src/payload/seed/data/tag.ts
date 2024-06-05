import { Page } from 'payload-types';

export const tagPageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
    title: 'tag',
    isHome: false,
    _status: 'published',
    blocks: [
        {
            blockType: 'TagDescription',
            title: 'tag',
            description:
                    'On this page, you will find a comprehensive list of tags used across various blogs. Tags serve as a crucial organizational tool, helping to categorize and filter content based on specific topics or themes. Each tag represents a particular subject, making it easier for readers to locate articles of interest.',
            image: '',
        },
    ]
}
