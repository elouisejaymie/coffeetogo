CREATE TABLE [dbo].[BeverageIngredient] (
    [BeverageId]   INT                NOT NULL,
    [IngredientId] INT                NOT NULL,
    [Units]        INT                NOT NULL,
    [DateCreated]  DATETIMEOFFSET (7) NOT NULL,
    [DateUpdated]  DATETIMEOFFSET (7) NOT NULL,
    CONSTRAINT [PK_BeverageIngredient] PRIMARY KEY CLUSTERED ([BeverageId] ASC, [IngredientId] ASC),
    CONSTRAINT [FK_BeverageIngredient_Beverage] FOREIGN KEY ([BeverageId]) REFERENCES [dbo].[Beverage] ([BeverageId]),
    CONSTRAINT [FK_BeverageIngredient_Ingredient] FOREIGN KEY ([IngredientId]) REFERENCES [dbo].[Ingredient] ([IngredientId])
);

