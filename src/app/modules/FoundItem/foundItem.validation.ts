import { z } from 'zod';

const ReportFoundItem = z.object({
	body: z.object({
		categoryId: z.string({
			required_error: 'Category id is required'
		}),
		itemName: z
			.string({
				required_error: 'Found item name is required'
			})
			.min(5, {
				message: 'Found item name must be at least 5 characters long'
			}),
		description: z
			.string({
				required_error: 'Description is required'
			})
			.min(5, {
				message: 'Description must be at least 5 characters long'
			}),
		location: z.string({
			required_error: 'Location is required'
		}),
		pictures: z.array(z.string()),
		foundDate: z.string({
			required_error: 'Found date is required'
		})
	})
});

const ReportItemValidations = {
	ReportFoundItem
};

export default ReportItemValidations;
