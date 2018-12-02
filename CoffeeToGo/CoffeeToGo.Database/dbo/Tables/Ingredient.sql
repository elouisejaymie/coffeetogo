CREATE TABLE [dbo].[Ingredient] (
    [IngredientId]   INT                IDENTITY (1, 1) NOT NULL,
    [Name]           NVARCHAR (50)      NOT NULL,
    [Description]    NVARCHAR (500)     NULL,
    [RemainingUnits] INT                NULL,
    [UnitsInPack]    INT                NULL,
    [DateUpdated]    DATETIMEOFFSET (7) NOT NULL,
    [DateCreated]    DATETIMEOFFSET (7) NOT NULL,
    CONSTRAINT [PK_Inventories] PRIMARY KEY CLUSTERED ([IngredientId] ASC)
);

