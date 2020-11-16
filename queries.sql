-- Database Queries

-- Find all customers with postal code 1010

SELECT Postcode FROM Customers
WHERE PostalCode = 1010 

-- Find the phone number for the supplier with the id 11

SELECT Phone FROM suppliers
WHERE SupplierID='11'

-- List first 10 orders placed, sorted descending by the order date

SELECT Orderdate FROM orders
ORDER BY Orderdate descending
LIMIT 10

-- Find all customers that live in London, Madrid, or Brazil

SELECT * FROM Customers
WHERE City='London' OR City="Madrid" OR Country="Brazil"
ORDER BY Country

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

UPDATE Customers
SET CustomerName = 'The Shire', ContactName='Bilbo Baggins', Address='1 Hobbit Hole', PostalCode='111', Country="Middle Earth"

-- Update Bilbo Baggins record so that the postal code changes to "11122"

UPDATE Customers
SET PostalCode= '11122'
WHERE CustomerName ='The Shire'
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
