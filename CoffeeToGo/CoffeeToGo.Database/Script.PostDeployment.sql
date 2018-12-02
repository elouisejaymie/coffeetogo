/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

SET IDENTITY_INSERT [dbo].[Beverage] ON 

GO
INSERT [dbo].[Beverage] ([BeverageId], [Name], [Description], [DateCreated], [DateUpdated]) VALUES (1, N'Double Americano', N'Double Americano', CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[Beverage] ([BeverageId], [Name], [Description], [DateCreated], [DateUpdated]) VALUES (2, N'Sweet Latte', N'Sweet Latte', CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[Beverage] ([BeverageId], [Name], [Description], [DateCreated], [DateUpdated]) VALUES (3, N'Flat White', N'Flat White', CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
SET IDENTITY_INSERT [dbo].[Beverage] OFF
GO
SET IDENTITY_INSERT [dbo].[Ingredient] ON 

GO
INSERT [dbo].[Ingredient] ([IngredientId], [Name], [Description], [RemainingUnits], [UnitsInPack], [DateUpdated], [DateCreated]) VALUES (1, N'Coffee Beans', N'Coffee Beans', 15, 15, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[Ingredient] ([IngredientId], [Name], [Description], [RemainingUnits], [UnitsInPack], [DateUpdated], [DateCreated]) VALUES (2, N'Sugar', N'Sugar', 15, 15, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[Ingredient] ([IngredientId], [Name], [Description], [RemainingUnits], [UnitsInPack], [DateUpdated], [DateCreated]) VALUES (3, N'Milk', N'Milk', 15, 15, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
SET IDENTITY_INSERT [dbo].[Ingredient] OFF
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (1, 1, 3, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (2, 1, 2, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (2, 2, 5, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (2, 3, 3, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (3, 1, 2, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (3, 2, 1, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
INSERT [dbo].[BeverageIngredient] ([BeverageId], [IngredientId], [Units], [DateCreated], [DateUpdated]) VALUES (3, 3, 4, CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset), CAST(N'2018-11-27T08:15:52.9530000+08:00' AS DateTimeOffset))
GO
